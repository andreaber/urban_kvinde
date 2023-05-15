import { Fragment, useContext, useMemo, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Memo from "./Memo";

const ItemDetail = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleAdd = () => {
    const newItem = {
      ...item,
      quantity,
      selectedOptions,
    };
    addToCart(newItem);
  };

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionName]: value,
    }));
  };

  const optionLabels = {
    size: "Talles",
    shoeSize: "Número",
  };

  const assemblyDate = useMemo(() => {
    return new Date();
  }, []);

  return (
    <div className="container">
      <div className="left">
        <h2>{item.name}</h2>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <div className="right">
        <p>{item.description}</p>
        {item.stock <= 5 && (
          <p>
            <strong>¡Quedan sólo {item.stock} unidades!</strong>
          </p>
        )}
        <p>Precio: ${item.price}</p>
        {item.stock > 0 && (
          <Fragment>
            {item.customOptions &&
              Object.entries(item.customOptions).map(
                ([optionName, options]) => (
                  <div className="custom-option">
                    <p>{optionLabels[optionName]}:</p>
                    <select
                      onChange={(e) =>
                        handleOptionChange(optionName, e.target.value)
                      }
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )
              )}
          </Fragment>
        )}

        {isInCart(item.id) ? (
          <Link to="/cart" className="btn btn-success">
            Terminar mi compra
          </Link>
        ) : (
          <ItemCount
            stock={item.stock}
            quantity={quantity}
            setQuantity={setQuantity}
            add={handleAdd}
          />
        )}
        <br />
        <small>Fecha de creación: {assemblyDate.toLocaleString()}</small>
        <Memo />
      </div>
    </div>
  );
};

export default ItemDetail;
