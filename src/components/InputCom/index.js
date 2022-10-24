import extractFilesHandle from "../utils";

export default extractFilesHandle(() => require.context(".", false, /\.js$/));
