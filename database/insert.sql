
INSERT INTO store.user (firstname, surname, email, password) VALUES 
('João', 'Silva', 'joao.silva@example.com', 'senha123'),
('Maria', 'Oliveira', 'maria.oliveira@example.com', 'senha456'),
('Carlos', 'Santos', 'carlos.santos@example.com', 'senha789');

INSERT INTO store.product (name, price, slug, description, price_with_discount, enabled, stock) VALUES 
('Produto A', 100.00, 'produto-a', 'Descrição do Produto A', 90.00, 1, 50),
('Produto B', 200.00, 'produto-b', 'Descrição do Produto B', 180.00, 1, 30),
('Produto C', 150.00, 'produto-c', 'Descrição do Produto C', NULL, 1, 0)
('Novo Produto D', 220.87, 'novo-produto-d', 'Descrição do Novo Produto D', 180.00, 1, 30);

INSERT INTO store.product_option (product_id, title, shape, radius, type, `values`) VALUES 
(1, 'Opção A1', 'circle', 5, 'text', 'Valor A1'),
(1, 'Opção A2', 'square', 0, 'color', 'Vermelho'),
(2, 'Opção B1', 'circle', 10, 'text', 'Valor B1'),
(3, 'Opção C1', 'square', 0, 'color', 'Azul')
(3, 'Opção D1', 'circle', 0, 'color', 'Roxo');

INSERT INTO store.product_image (product_id, path) VALUES 
(1, '/imagens/produto-a-imagem1.jpg'),
(1, '/imagens/produto-a-imagem2.jpg'),
(2, '/imagens/produto-b-imagem1.jpg'),
(3, '/imagens/produto-c-imagem1.jpg');

INSERT INTO store.category (name, slug) VALUES 
('Eletrônicos', 'eletronicos'),
('Roupas', 'roupas'),
('Alimentos', 'alimentos');

INSERT INTO store.product_category (product_id, category_id) VALUES 
(1, 1), (2, 1), (3, 2), (3, 1), (2, 2), (4, 1);
