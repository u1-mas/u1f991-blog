export interface BlogPost {
    attributes?: {
        title?: string
        description?: string
        tags?: string[]
        createdAt?: string // ISO 8601形式
        updatedAt?: string // ISO 8601形式
    }
    ReactComponent: React.FunctionComponent
}
