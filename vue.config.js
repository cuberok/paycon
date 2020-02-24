module.exports = {
    transpileDependencies: ["vuetify"],
    devServer: {
        proxy: 'https://testgate.cityhub.com.ua/transaction/create',
    }
};