int incomingByte = 0;
bool blinking = false;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  if (blinking) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(200);
    digitalWrite(LED_BUILTIN, LOW);
    delay(200);
  }

  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    // Serial.print("I received: ");
    // Serial.println(incomingByte, HEX);
    if (incomingByte == 0x30) { // '0'
      blinking = false;
    } else if (incomingByte == 0x31) {. // '1'
      blinking = true;
    }
  }
}
