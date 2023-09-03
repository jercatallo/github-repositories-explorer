export const paramsParser = (params: Record<string, string | number>): string =>{
    let paramString = '?';

    Object.keys(params).map((param) => {
        paramString += `${param}=${params[param]}&`
    })
    return paramString
}