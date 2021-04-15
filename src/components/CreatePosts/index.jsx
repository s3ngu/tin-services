import React, { useEffect, useState } from "react";
import { Container, DivBox, Button } from "./styled";

export default function ComboBox() {
  const [categoryId, setCategoryId] = useState(2);
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState({});

  const status = "active";
  const dateNow = new Date();

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
    // console.log(categoryId);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    // console.log(desc);
  };

  const onSubmit = (data) => {
    data.preventDefault();
    setPost({
      userId: 1, // ID cliente logado
      category: categoryId,
      desc: desc,
      status: status,
      changedAt: dateNow.toString(),
    });
  };

  useEffect(() => {
    if (JSON.stringify(post) !== "{}") {
      console.log(post);
    }
    if (JSON.stringify(post) !== "{}" && post.desc === "") {
      console.log("Favor digitar uma descrição !");
    }
    if (JSON.stringify(post) !== "{}" && post.desc !== "") {
      console.log("Anúncio enviado com sucesso !");
      setDesc("");
    }
  }, [post]);

  return (
    <Container>
      <DivBox>
        <form onSubmit={onSubmit}>
          <h1>Anúncio</h1>
          <h3>Categoria</h3>

          <div id="appearance-select">
            <select value={categoryId} onChange={handleCategoryIdChange}>
              <option value="1" selected="true">
                jardinagem
              </option>
              <option value="2">diarista</option>
            </select>
          </div>

          <h2>Tipo de Serviço</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Digite um Anúncio..."}
            id={"desc"}
            name={"desc"}
            rows={6}
            value={desc}
            onChange={handleDescChange}
          ></textarea>
          <br />
          <Button>Enviar anúncio</Button>
        </form>
      </DivBox>
    </Container>
  );
}
