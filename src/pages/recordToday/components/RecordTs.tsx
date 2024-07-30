/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';

const AudioRecord = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [media, setMedia] = useState<MediaRecorder | null>(null);
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState<MediaStreamAudioSourceNode | null>(null);
  const [analyser, setAnalyser] = useState<ScriptProcessorNode | null>(null);
  const [audioUrl, setAudioUrl] = useState<Blob | null>(null);
  const [serverAudio, setServerAudio] = useState<string | null>(null);

  const onRecAudio = () => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyserNode = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyserNode);

    const makeSound = (stream: MediaStream) => {
      const sourceNode = audioCtx.createMediaStreamSource(stream);
      setSource(sourceNode);
      sourceNode.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyserNode.onaudioprocess = function (e) {
        if (e.playbackTime > 30) {
          stream.getAudioTracks().forEach((track) => {
            track.stop();
          });
          mediaRecorder.stop();
          analyserNode.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecAudio = () => {
    if (media && stream && analyser && source) {
      media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setOnRec(true);
      };

      stream.getAudioTracks().forEach((track) => {
        track.stop();
      });

      media.stop();
      analyser.disconnect();
      source.disconnect();
    }
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audioURL = URL.createObjectURL(audioUrl);
      setServerAudio(audioURL);
    }

    if (audioUrl) {
      const sound = new File([audioUrl], 'soundBlob', { lastModified: new Date().getTime(), type: 'audio' });
      console.log(sound);
    }
  }, [audioUrl]);

  console.log(serverAudio);

  return (
    <>
      <button onClick={onRec ? onRecAudio : offRecAudio}>녹음</button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio controls src={serverAudio || undefined}></audio>
    </>
  );
};

export default AudioRecord;
