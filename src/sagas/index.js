import userWatchers from "./user";

export default function* rootWatchers() {
    yield [userWatchers()]
}