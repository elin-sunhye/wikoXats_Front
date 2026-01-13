export interface MenuItem {
  id: string
  label: string
  path: string
}

export interface MenuGroup {
  id: string
  label: string
  path: string
  items: MenuItem[]
}