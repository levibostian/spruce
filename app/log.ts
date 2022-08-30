type LogLevel = "debug" | "verbose" | "info"

let level: LogLevel = "info"

const getAcceptedLevels = (): LogLevel[] => {
  if (level == "info") return ["info"]
  if (level == "verbose") return ["info", "verbose"]
  return ["info", "verbose", "debug"]
}

export const setLogLevel = (logLevel: LogLevel): void => {
  console.log(`Setting log level to: ${logLevel}`)

  level = logLevel
}

export const debug = (message: string): void => {
  if (getAcceptedLevels().includes("debug")) {
    console.log(`[D] ${message}`)
  }
}

export const verbose = (message: string): void => {
  if (getAcceptedLevels().includes("verbose")) {
    console.log(`[V] ${message}`)
  }
}

export const info = (message: string): void => {
  if (getAcceptedLevels().includes("info")) {
    console.log(`[I] ${message}`)
  }
}

export const error = (message: string): void => {
  if (getAcceptedLevels().includes("info")) {
    console.log(`[E] ${message}`)
  }
}
