from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/projetos/ScrumAcademy')
def scrumAcademy():
    return render_template('conteudos/ScrumAcademy.html')

@app.route('/conteudos/padrao')
def padrao():
    return render_template('conteudos/conteudoPadrao.html')


if __name__ == '__main__':
    app.run()