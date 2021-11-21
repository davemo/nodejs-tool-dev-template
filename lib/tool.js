module.exports = function tool() {
  console.log('⏳ CLI tool: working ...')
  setTimeout(function() {
    console.log('✅ CLI tool: done!')
  }, 1000);
}