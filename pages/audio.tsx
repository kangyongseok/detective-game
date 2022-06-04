import Wrap from '@components/Template/Wrap';

function Audio() {
  return (
    <Wrap>
      <figure>
        <figcaption>
          OOOO (언론사 이름)<br />
          한줄 헤드라인
        </figcaption>
        <audio
          controls
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </Wrap>
  )
}

export default Audio;