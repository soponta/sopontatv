var player = jwplayer('player')
player.setup({
  playlist: [
    {
      image: 'https://cdn.jsdelivr.net/gh/soponta/sopontatv@main/bg_LCD.jpg',
      sources: [
        {
          default: false,
          type: 'application/dash+xml',
          file: file,
          drm: {
            clearkey: {
              keyId: keyid,
              key: key,
            },
          },
          label: '0',
        },
      ],
    },
  ],
  width: '100%',
  height: '100%',
  aspectratio: '16:9',
  autostart: false,
  mute: false,
  logo: {
    file: '#',
    link: '#',
    position: 'bottom-right',
  },
  captions: {
    color: '#FFF',
    fontSize: 15,
    backgroundOpacity: 0,
    edgeStyle: 'raised',
  },
  cast: {},
})
function toggleStretchingMode() {
  player.setConfig({
    stretching:
      player.getConfig().stretching === 'uniform' ? 'exactfit' : 'uniform',
  })
}
const stretchingButton = document.getElementById('stretching-button')
stretchingButton.addEventListener('click', toggleStretchingMode)
jwplayer().on('ready', function () {
  player = jwplayer('player')
})
