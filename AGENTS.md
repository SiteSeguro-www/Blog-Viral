# Instruções de Desenvolvimento - Blog Viral

- **Funcionalidade Total:** Sempre que criar uma nova função e um botão para essa função, garanta que tudo esteja 100% funcional. Botões não devem ser apenas visuais; eles devem executar a lógica pretendida imediatamente.
- **Imutabilidade Visual:** É ESTRITAMENTE PROIBIDO alterar, redesenhar ou modificar o visual, a navegação ou o CSS de arquivos já existentes, a menos que o usuário exija isso com instruções diretas e explícitas no chat.
- **Prevenção de Bugs ("Amnésia" do Bot):** Quando sessões são reiniciadas ou o limite de cota voltar, assuma de forma absoluta que o código base e a interface já estão corretos e aprovados. **NUNCA** reescreva componentes só para "melhorar o código" internamente. Limite suas edições *cirurgicamente* apenas aos arquivos afetados por onde a nova dúvida ou problema está, não modifique lógicas que o usuário não pediu.
