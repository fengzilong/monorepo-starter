import path from 'node:path'
import { publint } from 'publint'
import { formatMessage } from 'publint/utils'
import { glob } from 'tinyglobby';
import fse from 'fs-extra'
import c from 'picocolors'

const pkgFiles = await glob(
  [ '*/package.json' ],
  {
    cwd: '../packages',
    absolute: true,
  }
);

for (const pkgFile of pkgFiles) {
  const { messages } = await publint({
    pkgDir: path.dirname( pkgFile ),
    pack: 'pnpm',
    strict: false,
  })

  const logs = []

  if (messages.length > 0) {
    const pkg = await fse.readJson( pkgFile )

    logs.push(`Lint results for "${ pkg.name ?? 'Unknown' }"\n`)

    const errors = messages.filter((v) => v.type === 'error')
    if ( errors.length ) {
      logs.push(c.bold(c.red('Errors:')))
      errors.forEach((m, i) =>
        logs.push(c.dim(`${i + 1}. `) + formatMessage(m, pkg)),
      )
      process.exitCode = 1
    }

    const warnings = messages.filter((v) => v.type === 'warning')
    if ( warnings.length ) {
      logs.push(c.bold(c.yellow('Warnings:')))
      warnings.forEach((m, i) =>
        logs.push(c.dim(`${i + 1}. `) + formatMessage(m, pkg)),
      )
    }

    const suggestions = messages.filter((v) => v.type === 'suggestion')
    if ( suggestions.length ) {
      logs.push(c.bold(c.yellow('Suggestions:')))
      suggestions.forEach((m, i) =>
        logs.push(c.dim(`${i + 1}. `) + formatMessage(m, pkg)),
      )
    }

    console.log( logs.join('\n') + '\n' )
  }
}