export const parseData = resp => {
    if (!resp) return null;

    return {
        Id: resp.Id,
        Name: resp.Name,
        LastModifiedDateTime: resp.LastModifiedDateTime,
        description: resp.ShortDesc
    }
};
