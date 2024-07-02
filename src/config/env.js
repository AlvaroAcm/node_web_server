import env from "dotenv"
import  envvar from "env-var";
env.config()

export const envs = {
    PORT:envvar.get("port").required().asPortNumber(),
    PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString()
}


