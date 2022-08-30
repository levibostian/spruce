import "dotenv/config"
import { Command } from "commander"
import { dumpInbox } from "./app/dump"
import { setLogLevel } from "./app/log"
const program = new Command()

program
  .name("spruce")
  .description("Easily run automations against your email inbox.")
  .option("--verbose", "verbose logging")
  .option("--debug", "debug logging")
  .version(require("./package").version) // eslint-disable-line @typescript-eslint/no-var-requires

program
  .command("dump")
  .description(
    "Output all emails from your inbox into output directory. Great for creating a sample data set for writing plugins."
  )
  .option("-o, --output <string>", "directory to dump emails into.", __dirname)
  .action(async (options) => {
    const outputDir = options.output

    await dumpInbox(outputDir)
  })

program.parse()

const options = program.opts()
if (options.debug) setLogLevel("debug")
else if (options.verbose) setLogLevel("verbose")
else if (options.info) setLogLevel("info")
