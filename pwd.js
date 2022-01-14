function pwd() {
    const cwd = process.cwd()
    process.stdout.write(cwd)
  }

module.exports = {
  pwd,
}
