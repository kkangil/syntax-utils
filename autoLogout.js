/**
 * 10분 후 자동 로그아웃
 * idleMax를 설정하면 그 시간 후 window에 action이 발생하면 자동로그아웃 처리 (idleMax는 초단위)
 */

let idleMax = 600
let idleTime = 0
let autoLoggedout = false

const timerIncrement = () => {
  idleTime = idleTime + 1
  if (idleTime > idleMax && !autoLoggedout) {
    logOutAfterIdleTime()
  }
}

const logOutAfterIdleTime = () => {
  if (!autoLoggedout) {
    autoLoggedout = true
    // AuthActions.logOut()
  }
}

const initIdleTime = () => {
  autoLoggedout = false
  idleTime = 0
}

export default () => {
  setInterval(timerIncrement, 1000)
  window.addEventListener('touchstart', initIdleTime, false)
  window.addEventListener('click', initIdleTime, false)
  window.addEventListener('keypress', initIdleTime, false)
  window.addEventListener('mousemove', initIdleTime, false)
}
