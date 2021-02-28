import { promisify } from 'util'
import { writeFile } from 'fs'
import { v4 as uuidv4 } from 'uuid'
export interface destinationType {
  path: string
  fileName?: string
  fileExtension?: 'png' | 'jpg' | 'jpeg'
}

export interface Base64ToImage {
  toImage: (
    base64Data: string,
    destination: destinationType
  ) => Promise<boolean>
}

export class PassFromBase64ToImage implements Base64ToImage {
  private readonly write: any
  constructor () {
    this.write = promisify(writeFile)
  }

  async toImage (base64Data: string, destination: destinationType): Promise<boolean> {
    const [header, body] = base64Data.split(';base64,')
    if (!header && !body) {
      throw new Error('base64 not provided')
    }
    const string64 = (body?.length > 0) ? body : header
    const { path, fileName = String(uuidv4()), fileExtension = 'png' } = destination

    await this.write(`${path}/${fileName}.${fileExtension}`, string64, 'base64')
    return true
  }
}
