import { Command } from "../command"
import { Context } from "../context"

export class LsCommand extends Command {
  override async run(context: Context): Promise<number> {

    // Validate and expand arguments (flags and file/directory names).
    // Only supporting single path and no flags so far.
    if (context.args.length != 1) {
      // Write error message to stderr
      return 1
    }

    const path = context.args[0]
    const filenames = await context.filesystem.list(path)
    await context.stdout.write(filenames.join("  "))
    return 0
  }
}