'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)
export async function addToNewsletter(email: string) {
    try {
        await resend.contacts.create({
            email,
            audienceId: process.env.RESEND_AUDIENCE_ID!,
            unsubscribed: false
        })

        return { success: true }
    } catch (error) {
        console.error('Error adding to newsletter:', error)
        return { success: false }
    }
}