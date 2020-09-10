/*                 */
/*   Typing anim   */
/*                 */

new TypeIt('#loading', {
    speed: 50,
    waitUntilVisible: true
  })
    .type('Loading, plrase', {delay: 400})
    .move(-3)
    .delete(1)
    .type('e')
    .move('END')
    .type(' wait...')
    .go()


/*                 */
/*   Display form  */
/*                 */

setTimeout(async () => {
    document.getElementById('loading').style.display = 'none'
    document.querySelector('form').style.display = 'block'
}, 4000)
