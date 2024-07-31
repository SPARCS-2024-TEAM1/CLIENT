import { useState, useCallback } from 'react';

const RecordTodayTemp = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [media, setMedia] = useState<MediaRecorder | null>(null);
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState<MediaStreamAudioSourceNode | null>(null);
  const [analyser, setAnalyser] = useState<ScriptProcessorNode | null>(null);
  const [audioUrl, setAudioUrl] = useState<Blob | null>(null);

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.AudioContext)();

    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream: MediaStream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      // AudioBufferSourceNode 연결
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    // 마이크 사용 권한 획득 후 녹음 시작
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        // dataavailable 이벤트 핸들러 등록
        mediaRecorder.addEventListener('dataavailable', (e) => {
          setAudioUrl(e.data);
          setOnRec(true);
        });

        mediaRecorder.start();
        setStream(stream);
        setMedia(mediaRecorder);
        makeSound(stream);
        // 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
        analyser.onaudioprocess = function (e) {
          setOnRec(false);
        };
      })
      .catch((error) => {
        // 마이크 사용 권한을 받지 못했을 때 처리
        alert('마이크 사용 권한을 허용해야 녹음을 진행할 수 있습니다.');
      });
  };

  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      chunks.push(e.data);
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audio = new Audio(URL.createObjectURL(audioUrl));
      audio.play();
    }
  }, [audioUrl]);

  return <div>RecordTodayTemp</div>;
};

export default RecordTodayTemp;
