const Events = {
  // ... pre-defined events
  CONNECT: "connection",
  CONNECT_ERROR: "connect_error",
  CONNECT_TIMEOUT: "connect_timeout",
  DISCONNECT: "disconnect",
  ERROR: "error",
  MESSAGE: "message",
  BROADCAST: "broadcast",
  RECONNECT: "reconnect",
  RECONNECT_ATTEMPT: "reconnect_attempt",
  RECONNECT_ERROR: "reconnect_error",
  RECONNECT_FAILED: "reconnect_failed",

  //... Custom Events
  SEAT_AVAILABLE: "seat-available",
  BOOK_SEAT : "book-seat",
  REFETCH_SEAT : "refetch-seat",
  UPDATE_CLASSROOM:"update-classroom"
};

export default Events;
