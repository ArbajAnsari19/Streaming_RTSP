from flask import Flask, render_template, Response
import cv2

app = Flask(__name__)

#put your RTSP link here in place of this : rtsp://rtspstream:14f078b1a4bd2ff8e279aad37c9f3593@zephyr.rtsp.stream/movie also to see your web cam live enter (0)
camera = cv2.VideoCapture("rtsp://rtspstream:14f078b1a4bd2ff8e279aad37c9f3593@zephyr.rtsp.stream/movie")  


def gen_frames():  # generate frame by frame from camera
    while True:
        # Capture frame-by-frame
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result


@app.route('/')
def video_feed():
    #Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')



if __name__ == '__main__':
    app.run(debug=True)