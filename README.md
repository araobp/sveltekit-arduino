# SvelteKit and Arduino

## My Arduino board

[Arduino UNO R3](https://docs.arduino.cc/hardware/uno-rev3/)

## Architecture

```
[Arduino UNO]--- Serial ---[SvelteKit:backend(node.js)]--- REST ---[SvelteKit:frontend]
```

## Code

To run the app in the development environment,
```
$ cd app
$ npm run dev
```

To build and run the app,
```
$ cd app
$ npm run build
$ cd build
$ node index.js
```

## References

- [Arduino IDE](https://www.arduino.cc/en/software)
