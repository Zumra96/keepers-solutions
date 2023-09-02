import type { User } from "./User"

export class Role {
    public id: number | null = null
    public name: string | null = null
    public type: string | null = null
    public description: string | null = null
    public editable: boolean = false
    public active: boolean = false
    public users: User[] = []
    public created_on: string | null = null
    public modified_on: string | null = null
    
  }
  