export const getLocation = async () => {
    return new Promise((resolve, reject) => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }
                        resolve(pos)
                    },
                    () => { 
                        resolve(null)
                    }
                );
            } else {
                // Browser doesn't support Geolocation
                reject()
            }
        } catch(e) {
            console.log(e)
            reject(e)
        }
    })
},