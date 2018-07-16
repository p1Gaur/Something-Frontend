export interface cartItemInfo {
    itemId:number,
    itemName:string,
    itemType:string,
    itemDescription:string,
    itemPrice:number,
    itemImage:string,
    eventId:number,
    eventName:string
}
export interface cartVenueInfo {
    venueId:number,
    venueName:string,
    venueType:string,
    venueLocation:string,
    venuePrice:number,
    venueCapacity:number
}
export interface cartMenuInfo {
    menuId:number,
    packageName:string,
    menuDescription:string,
    pricePerPlate:number,
    cultureId:number,
    packageType:string
}
export interface cartInfo {
    cartId:string,
    venueId:number,
    menuId:number,
    delFlag:number
}
export interface eventItemMapper {
    eiMapper: number,
    eventId: number,
    itemId: number,
    cartId: number,
    delFlag: number
}
export interface events {
    eventId: number,
    eventName: string,
    cultureId: number,
    delFlag: number
}