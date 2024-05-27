const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const routerImageGet = require('./routes/routerImageGet');
const routerImagePost = require('./routes/routerImagePost');
const routerImageDelete = require('./routes/routerImageDelete');
const routerAgendaGet = require('./routes/routerAgendaGet');
const routerAgendaPost = require('./routes/routerAgendaPost');
const routerAgendaDelete = require('./routes/routerAgendaDelete');
const routerAgendaUpdate = require('./routes/routerAgendaUpdate');
const routerBioGet = require('./routes/routerBioGet');
const routerBioPut = require('./routes/routerBioPut');
const routerLancamentoGet = require('./routes/routerLancamentoGet');
const routerLancamentoPut = require('./routes/routerLancamentoPut');
const routerLogin = require('./routes/routerLogin');

app.use(cors());
app.use(express.json());
app.use('/api', routerImageGet);
app.use('/api', routerImagePost);
app.use('/api', routerImageDelete);
app.use('/api', routerAgendaGet);
app.use('/api', routerAgendaPost);
app.use('/api', routerAgendaDelete);
app.use('/api', routerAgendaUpdate);
app.use('/api', routerBioGet);
app.use('/api', routerBioPut);
app.use('/api', routerLancamentoGet);
app.use('/api', routerLancamentoPut);
app.use('/api', routerLogin);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
