import cv2
import numpy as np
from datetime import datetime

DETECT_EVERY_SECONDS = 2


class Global:
    last_detection_time = datetime(1, 1, 1, 0, 0, 0, 0)


def process_detect_motion():
    time_difference = datetime.now() - Global.last_detection_time
    if time_difference.seconds > DETECT_EVERY_SECONDS:
        Global.last_detection_time = datetime.now()
        print("Motion detected!")


def main():
    cap = cv2.VideoCapture(0)
    last_mean = 0

    while True:
        ret, frame = cap.read()
        cv2.imshow("frame", frame)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        result = np.abs(np.mean(gray) - last_mean)
        last_mean = np.mean(gray)
        if result > 0.07:
            process_detect_motion()

        if cv2.waitKey(1) & 0xFF == ord("q"):  # or frame_rec_count == 240:
            break
    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()
