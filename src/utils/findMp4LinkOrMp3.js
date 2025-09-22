export const findMp4LinkOrMp3 = (links, type) => {
   return links.find((link)=> {
      const extension = link.slice(link.lastIndexOf('.') + 1);

       if (type === 'video') return extension === 'mp4'
       if (type === 'audio') return extension === 'mp3'
    })
}
