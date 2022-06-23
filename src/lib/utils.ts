export function pathToSlup(path: string) {
    return path.replace(".svx", "")
        .replace(".md", "")
        .replaceAll(".", "")
        .replaceAll("/", "")
}