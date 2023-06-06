const PAGE = Object.freeze({
  BUILD: 'BUILD',
  PLAY: 'PLAY',
  OPTIONS: 'OPTIONS',
});

const setPage = (newPage) => {
  if(newPage === PAGE.BUILD) {
    CURRENT_PAGE.value = PAGE.BUILD
  } else if(newPage === PAGE.PLAY) {
    CURRENT_PAGE.value = PAGE.PLAY
  } else if(newPage === PAGE.SETTINGS) {
    CURRENT_PAGE.value = PAGE.SETTINGS
  } else {
    console.error('Invalid page')
  }
}

export { PAGE, setPage }