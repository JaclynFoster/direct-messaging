import * as bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

export const encryptPassword = password => {
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export const comparePassword = (dbHash, inputPassword) => {
    return bcrypt.compareSync(inputPassword, dbHash)
}
