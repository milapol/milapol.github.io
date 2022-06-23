export interface BlogPost {
    path: string,
    metadata: {
        title: string,
        description: string,
        date?: string,
    }
}