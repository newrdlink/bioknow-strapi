module.exports = {
  async afterCreate(event) {
    const { result } = event
    const { name, phone, text } = result
    try {
      await strapi.plugin('email').service('email').send({
        // to: 'romandidukh@gmail.com',
        to: 'lisvra@mail.ru',
        from: 'newrdlink@yandex.ru',
        subject: 'Репетитор по биологии - форма связи с сайта',
        html: `
        <h3>Отправитель формы: ${name}</h6>
        <h5>Конт. тел.: ${phone}</h6>
        <p style="color:000000;text-align:start;">Текст из формы: <span>${text}</span></p>
        `
      })

    } catch (error) {
      console.log(error)
    }
  }
}
