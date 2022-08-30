import { getInboxEmails } from "./email"
import fs from "fs"
import path from "path"
import * as log from "./log"

// dumps all emails from inbox into directory you choose. Great for getting a set of emails you can use for development.
export const dumpInbox = async (outputDirectory: string): Promise<void> => {
  log.info(`Dumping emails from inbox into directory: ${outputDirectory}...`)

  fs.mkdirSync(outputDirectory, { recursive: true })

  const emails = await getInboxEmails()

  emails.forEach((email) => {
    const fileName = `${email.date!.toISOString()} ${
      email.subject || "(no subject)"
    }.json`.replaceAll(" ", "_")
    const outputFilePath = path.join(outputDirectory, fileName)

    log.debug(`Saving ${fileName} into final path ${outputFilePath}`)

    fs.writeFileSync(outputFilePath, JSON.stringify(email))
  })
}
