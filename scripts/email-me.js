#!/usr/bin/env node
const yargs = require('yargs')
const fs = require('fs');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
const { emailPasswordReset } = require('../src/lib/email/pre-defined/email-password-reset.js');

// -----------------------------------------------------------------------------

const main = async () => {
  const args = yargs
    .usage('example usage')
    .option('to', {
      alias: 'to',
      type: 'string',
      describe: "who to send the email to, duh!",
    })
    .option('reset-url', {
      alias: 'to',
      type: 'string',
      describe: "who to send the email to, duh!",
    })
    .epilogue('example epilogue')
    .argv;

  const result = await emailPasswordReset({
    to: args.to,
    resetUrl: args.resetUrl,
  });

  console.log(result);
}

main();
