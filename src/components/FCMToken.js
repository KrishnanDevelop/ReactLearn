// src/components/FCMToken.js
import React, { useEffect, useState } from "react";
import { messaging, getToken } from "../firebase";

const FCMToken = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ask user permission for notification
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          // Get FCM token using your public VAPID key
          getToken(messaging, { vapidKey: "BHosPvNW8QoTQ4qS9WBBL4Zy4yVagda_QYsQ-8v8UVHna4hW42M8SyjQUII9SPINynculvVlBbMiFcDXWqXrR8M" })
            .then((currentToken) => {
              if (currentToken) {
                setToken(currentToken);
                console.log("FCM Token:", currentToken);
              } else {
                setError("No registration token available.");
              }
            })
            .catch((err) => {
              setError("An error occurred while retrieving token: " + err);
            });
        } else {
          setError("Notification permission denied");
        }
      });
  }, []);

  return (
    <div>
      <h3>Firebase Cloud Messaging Token</h3>
      {token && <textarea rows={6} cols={60} readOnly value={token} />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FCMToken;
