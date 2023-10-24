export class User{
    //atributos
    name?: string
    lastName?: string
    email?:string
    username?: string
    password?: string
    phoneNumber?: string
    createdAt?: string
    updatedAt?: string

    constructor(
    name = "",
    lastName = "",
    email = "",
    username = "",
    password = "",
    phoneNumber = "",
    createdAt = "",
    updatedAt = ""
    ) {
    this.name = name,
    this.lastName = lastName,
    this.email = email,
    this.username = username,
    this.password = password,
    this.phoneNumber = phoneNumber
    }
}