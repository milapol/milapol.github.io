export function pathToSlup(path: string) {
    return path.replace(".svx", "")
        .replace("/blog", "")
        .replace(".md", "")
        .replaceAll(".", "")
        .replaceAll("/", "")
}