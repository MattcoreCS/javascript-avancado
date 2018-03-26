'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NegociacoesView = function (_View) {
	_inherits(NegociacoesView, _View);

	function NegociacoesView() {
		_classCallCheck(this, NegociacoesView);

		return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).apply(this, arguments));
	}

	_createClass(NegociacoesView, [{
		key: 'template',
		value: function template(model) {
			return '\n\t\t<table class="table table-hover table-bordered">\n\t        <thead>\n\t            <tr>\n\t                <th onclick="negociacaoController.ordena(\'data\')">DATA</th>\n\t                <th onclick="negociacaoController.ordena(\'quantidade\')">QUANTIDADE</th>\n\t                <th onclick="negociacaoController.ordena(\'valor\')">VALOR</th>\n\t                <th onclick="negociacaoController.ordena(\'volume\')">VOLUME</th>\n\t            </tr>\n\t        </thead>\n\t        \n\t        <tbody>\n\t        \t' + model.negociacoes.map(function (n) {
				return '\n        \t\t\t<tr>\n        \t\t\t\t<td>' + DateHelper.dataParaTexto(n.data) + '</td>\n        \t\t\t\t<td>' + n.quantidade + '</td>\n        \t\t\t\t<td>' + n.valor + '</td>\n        \t\t\t\t<td>' + n.volume + '</td>\n        \t\t\t</tr>\t\n\t        \t';
			}).join('') + '\n\t        </tbody>\n\t        \n\t        <tfoot>\n\t        \t<td colspan="3"></td>\n\t        \t<td>' + model.volumeTotal + '</td>\n\t        </tfoot>\n\t    </table>\n\t\t';
		}
	}]);

	return NegociacoesView;
}(View);
//# sourceMappingURL=NegociacoesView.js.map