'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, Mail, Building2, Phone } from 'lucide-react'
import { joinWaitlist } from "./actions"
import { useToast } from "@/components/ui/use-toast"

export default function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<'clubgoer' | 'club'>('clubgoer')
  const { toast } = useToast()

  async function onSubmit(formData: FormData) {
    setIsLoading(true)
    const result = await joinWaitlist(formData)
    setIsLoading(false)

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    } else if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      })
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          type="button"
          onClick={() => setUserType('clubgoer')}
          className={`${
            userType === 'clubgoer'
              ? 'bg-purple-600 text-white'
              : 'bg-zinc-800 text-zinc-300'
          } px-4 py-2 rounded-full transition-colors`}
        >
          Club-goer
        </Button>
        <Button
          type="button"
          onClick={() => setUserType('club')}
          className={`${
            userType === 'club'
              ? 'bg-purple-600 text-white'
              : 'bg-zinc-800 text-zinc-300'
          } px-4 py-2 rounded-full transition-colors`}
        >
          Club
        </Button>
      </div>

      <input type="hidden" name="userType" value={userType} />

      <div className="relative">
        <Input
          type="text"
          name="name"
          placeholder={userType === 'clubgoer' ? "Full name..." : "Club name..."}
          required
          className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 h-12 pl-12"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          {userType === 'clubgoer' ? (
            <User className="w-4 h-4 text-zinc-600" />
          ) : (
            <Building2 className="w-4 h-4 text-zinc-600" />
          )}
        </div>
      </div>

      <div className="relative">
        <Input
          type="email"
          name="email"
          placeholder="Email address..."
          required
          className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 h-12 pl-12"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Mail className="w-4 h-4 text-zinc-600" />
        </div>
      </div>

      {userType === 'club' && (
        <div className="relative">
          <Input
            type="tel"
            name="pocPhone"
            placeholder="Phone number of POC..."
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 h-12 pl-12"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Phone className="w-4 h-4 text-zinc-600" />
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white h-12 hover:opacity-90"
      >
        {isLoading ? 'Joining...' : 'Join Waitlist'}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  )
}

