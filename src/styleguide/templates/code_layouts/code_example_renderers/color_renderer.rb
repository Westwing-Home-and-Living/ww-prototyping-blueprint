Hologram::CodeExampleRenderer::Factory.define 'color' do
  example_template 'color_example_template'
  lexer { Rouge::Lexer.find('hbs') }
end
