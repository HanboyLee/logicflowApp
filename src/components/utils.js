const modulesHandle = (modulesFiles, reg) => {
  return (modules, modulePath) => {
    const moduleName = modulePath.replace(reg, "$1");
    if (moduleName === "index") {
      return modules;
    }
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  };
};

function extractFilesHandle(cb) {
  const Files = cb();
  const extractFiles = Files.keys().reduce(
    modulesHandle(Files, /^\.\/(\w+)\.js$/),
    {}
  );
  return extractFiles;
}
export default extractFilesHandle;
