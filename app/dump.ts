import { getInboxEmails } from './email'
import fs from 'fs'
import path from 'path'

// dumps all emails from inbox into directory you choose. Great for getting a set of emails you can use for development. 
export const dumpInbox = async(outputDirectory: string): Promise<void> => {
  const emails = await getInboxEmails()  

  emails.forEach((email) => {
    const fileName = `${email.date!.toISOString()} ${email.subject || "(no subject)"}.json`.replaceAll(" ", "_")

    fs.writeFileSync(path.join(outputDirectory, fileName), JSON.stringify(email))
  })
}