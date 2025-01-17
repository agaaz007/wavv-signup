'use server'

import { z } from 'zod'
import { addToWaitlist } from '../lib/dynamodb'

const clubgoerSchema = z.object({
  userType: z.literal('clubgoer'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
})

const clubSchema = z.object({
  userType: z.literal('club'),
  name: z.string().min(1, 'Club name is required'),
  email: z.string().email('Invalid email address'),
  pocPhone: z.string().min(1, 'Phone number of POC is required'),
})

const schema = z.discriminatedUnion('userType', [clubgoerSchema, clubSchema])

export async function joinWaitlist(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries())
  const validatedFields = schema.safeParse(rawData)

  if (!validatedFields.success) {
    return { error: 'Invalid form data' }
  }

  const data = validatedFields.data
  const tableName = data.userType === 'clubgoer' ? 'WavvClubgoersWaitlist' : 'WavvClubsWaitlist'

  const item = {
    ...data,
    id: `${data.userType}_${Date.now()}`, // Simple unique ID
    createdAt: new Date().toISOString(),
  }

  const result = await addToWaitlist(tableName, item)

  if (result.error) {
    return { error: result.error }
  }

  return { success: true, message: 'Successfully joined the waitlist!' }
}

