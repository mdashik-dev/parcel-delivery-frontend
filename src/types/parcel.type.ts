export interface StatusLog {
  status: string
  note?: string
  timestamp: { $date: string }
  updatedBy: { $oid: string }
}

export interface Parcel {
  _id: { $oid: string }
  trackingId: string
  senderId: { $oid: string }
  receiverId: { $oid: string }
  type: string
  weight: number
  deliveryAddress: string
  currentStatus: string
  statusLogs: StatusLog[]
  isCanceled: boolean
  isDelivered: boolean
  isBlocked: boolean
  fee: number
  createdAt: { $date: string }
  updatedAt: { $date: string }
}